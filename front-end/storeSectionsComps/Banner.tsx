// HeroSection.js

import { heroType, sectionType } from "@/app/types/sectionsTypes";
import React from "react";
import { TbSectionSign } from "react-icons/tb";
import dimg from "@/public/dimg.jpg"
import Image from "next/image";

const HeroSection = ({ section }: { section: heroType }) => {
  return (
    <div
      style={{ background: section.properties.general?.backgroundColor }}
      className=" text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            {section.properties.title?.show && (
              <h1
                style={{ color: section.properties.title?.color }}
                className="text-5xl font-bold mb-6"
              >
                {section.properties.title?.text}
              </h1>
            )}
            {section.properties.subtitle?.show && (
              <p
                style={{ color: section.properties.subtitle?.color }}
                className="text-lg mb-8"
              >
                {section.properties.subtitle?.text}
              </p>
            )}

            {section.properties.ctaButton?.show && (
              <button
                className="btn "
                style={{
                  backgroundColor: section.properties.ctaButton?.bgColor,
                  color: section.properties.ctaButton?.txtColor,
                }}
              >
                {section.properties.ctaButton?.text}
              </button>
            )}
          </div>
          {section.properties.heroImage?.show && (
            <div className="order-1  md:order-2">
              <Image
                className="w-full h-auto rounded-lg p-8"
                src={section.properties.heroImage.url || dimg}
                alt="Hero"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
