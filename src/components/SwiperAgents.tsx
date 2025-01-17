import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { Keyboard, EffectCards } from "swiper/modules";
import { Agent } from "../interfaces/Agent";

interface Props {
  agents: Agent[];
  onAgentChange: (agentId: string) => void;
  selectedAgentId: string | null;
}

export default function SwiperAgents({
  agents,
  onAgentChange,
  selectedAgentId,
}: Props) {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const syncSwiper = async () => {
      if (selectedAgentId && swiperRef.current) {
        const index = agents.findIndex(
          (agent) => agent.uuid === selectedAgentId
        );
        if (index >= 0) {
          await new Promise((resolve) => setTimeout(resolve, 0));
          swiperRef.current.slideTo(index);
        }
      }
    };

    syncSwiper();
  }, [selectedAgentId, agents]);

  return (
    <Swiper
      onSlideChange={(swiper) => {
        const activeAgent = agents[swiper.activeIndex];
        if (activeAgent) {
          onAgentChange(activeAgent.uuid);
        }
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      scrollbar={{
        hide: true,
      }}
      effect={"cards"}
      grabCursor={true}
      centeredSlides={true}
      loop={false}
      slidesPerView={1.5}
      keyboard={{
        enabled: true,
      }}
      modules={[EffectCards, Keyboard]}
      className="mySwiper"
    >
      {agents.map((agent: Agent) => (
        <SwiperSlide key={agent.uuid} className="relative w-full h-full btn">
          <div
            className={`${
              agent.uuid === selectedAgentId ? "active" : ""
            } btn__inner`}
          >
            <div className="btn__slide"></div>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={agent.background}
                alt={agent.displayName}
                className={`${
                  agent.uuid === selectedAgentId
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-90"
                } absolute inset-0 w-full h-full bg-no-repeat bg-cover -z-[1] transition-transform duration-500`}
              />
              <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                className="relative z-10 object-cover w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
