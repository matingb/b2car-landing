"use client";

import React, { useState } from "react";

import { FAQS } from "../constants";
import { AccordionItem, Reveal } from "../components/UI";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary mb-4">Preguntas Frecuentes</h2>
          </Reveal>
        </div>
        
        <Reveal>
          <div className="space-y-2">
            {FAQS.map((faq) => (
              <AccordionItem 
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => toggle(faq.id)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
