"use client";
import React, { useEffect, useRef } from "react";
import {
  Atom,
  Server,
  Container,
  PenSquare,
  Shield,
  Braces,
  Code,
  Layers,
  Wind,
  ShoppingCart,
  Bird,
  Component,
  BookOpen,
  Puzzle,
  MousePointer2,
} from "lucide-react";

interface TechIcon {
  icon: React.ElementType;
  name: string;
}

const techIcons: TechIcon[] = [
  { icon: Server, name: "Node.js" },
  { icon: MousePointer2, name: "Webflow" },
  { icon: Wind, name: "Tailwind CSS" },
  { icon: Shield, name: "Angular" },
  { icon: ShoppingCart, name: "Shopify" },
  { icon: Layers, name: "Next.js" },
  { icon: Atom, name: "React" },
  { icon: PenSquare, name: "WordPress" },
  { icon: Braces, name: "JavaScript" },
  { icon: Code, name: "TypeScript" },
  { icon: Container, name: "Docker" },
  { icon: Bird, name: "NestJS" },
  { icon: Component, name: "Material-UI" },
  { icon: BookOpen, name: "Storybook" },
  { icon: Puzzle, name: "Bit" },
];

interface Tag {
  el: HTMLDivElement;
  x: number;
  y: number;
  z: number;
}

interface SphereState {
  tags: Tag[];
  rotationSpeedX: number;
  rotationSpeedY: number;
  lastMouseX: number;
  lastMouseY: number;
  isDragging: boolean;
}

const TechSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement[]>([]);

  const sphereState = useRef<SphereState>({
    tags: [],
    rotationSpeedX: 0.0005,
    rotationSpeedY: 0.0005,
    lastMouseX: 0,
    lastMouseY: 0,
    isDragging: false,
  }).current;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const radius = container.offsetWidth / 2.5;
    const tagElements = tagsRef.current;

    sphereState.tags = tagElements
      .map((el, i) => {
        if (!el) return null;
        const phi = Math.acos(-1 + (2 * (i + 1)) / (tagElements.length + 1));
        const theta = Math.sqrt((tagElements.length + 1) * Math.PI) * phi;

        return {
          el,
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
        };
      })
      .filter((tag): tag is Tag => tag !== null);

    let animationFrameId: number;

    const animate = () => {
      sphereState.tags.forEach((tag) => {
        const rotY = sphereState.rotationSpeedX;
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = tag.x * cosY - tag.z * sinY;
        const z1 = tag.z * cosY + tag.x * sinY;

        const rotX = sphereState.rotationSpeedY;
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = tag.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + tag.y * sinX;

        tag.x = x1;
        tag.y = y2;
        tag.z = z2;

        const scale = (radius * 2) / (radius * 2 + tag.z);
        tag.el.style.transform = `translate(-50%, -50%) translate(${tag.x}px, ${tag.y}px) scale(${scale})`;
        tag.el.style.opacity = (scale * 0.8 + 0.2).toString();
        tag.el.style.zIndex = Math.floor(scale * 100).toString();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      sphereState.isDragging = true;
      sphereState.lastMouseX = e.clientX;
      sphereState.lastMouseY = e.clientY;
      container.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      sphereState.isDragging = false;
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (sphereState.isDragging) {
        const dx = (e.clientX - sphereState.lastMouseX) * 0.1;
        const dy = (e.clientY - sphereState.lastMouseY) * 0.1;
        sphereState.rotationSpeedY = dy * 0.001;
        sphereState.rotationSpeedX = dx * 0.001;
        sphereState.lastMouseX = e.clientX;
        sphereState.lastMouseY = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      sphereState.isDragging = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.style.cursor = "grab";

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [sphereState]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-2xl aspect-square"
    >
      <img
        src="/Assets/home page/Sphere.png"
        alt="Sphere background"
        className="absolute w-full h-full object-contain pointer-events-none"
      />
      <div className="relative w-full h-full">
        {techIcons.map((tech, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) tagsRef.current[i] = el;
            }}
            className="tag group absolute top-1/2 left-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900/80 p-3 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-gray-800"
          >
            <tech.icon
              className="text-gray-400 transition-colors duration-300 group-hover:text-white"
              size={32}
              strokeWidth={1.5}
            />
            <span className="pointer-events-none absolute top-full mt-2 hidden rounded bg-gray-950 px-2 py-1 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSphere;
