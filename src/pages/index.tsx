import React, { useEffect } from 'react';
// import {gsap} from "gsap"
import '@/styles/main.scss'
import Image from 'next/image';
import first from "@/static/images/first.png"
import second from "@/static/images/second.png"
import third from "@/static/images/third.png"
import fourth from "@/static/images/fourth.png"
import fifth from "@/static/images/fifth.png"
import Link from 'next/link';

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(Observer);
    // 这里放置其他与 Observer 相关的初始化代码
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      headings = gsap.utils.toArray(".section-heading"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      splitHeadings = headings.map(heading => new SplitText((heading as any), { type: "chars,words,lines", linesClass: "clip-text" })),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating: boolean;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    const gotoSection = (index: number, direction: number) => {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => animating = false
        });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], {
        yPercent: i => i ? -100 * dFactor : 100 * dFactor
      }, {
        yPercent: 0
      }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(splitHeadings[index].chars, {
          autoAlpha: 0,
          yPercent: 150 * dFactor
        }, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random"
          }
        }, 0.2);
      currentIndex = index;
    }
    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });
    gotoSection(0, 1);
  },);

  const Applist = [
    {
      key: 'first',
      url: first,
      title: 'Scroll down'
    },
    {
      key: 'second',
      url: second,
      title: 'Animated with GSAP'
    },
    {
      key: 'third',
      url: third,
      title: 'GreenSock'
    },
    {
      key: 'fourth',
      url: fourth,
      title: 'Animation platform'
    },
    {
      key: 'fifth',
      url: fifth,
      title: 'Keep scrolling'
    },

  ]

  return (
    <div className='main-container'>
      <div className='header ' >
        <div className='text-white' >Animated Sections</div>
        <div className='text-white'>Original By Brian</div>
      </div>

      {
        Applist.map((item, index) => {
          return (
            <section className={`${item.key}`} key={index}>
              <div className="outer">
                <div className="inner">
                  <div className="bg " >
                    <div className="overflow"></div>
                    <Image src={item.url} className='imgs h-full w-full  inset-0' alt='' ></Image>
                    <div className="section-heading">
                      <h2 className='text-white' >{item.title}</h2>
                      {item.key == 'first' && <Link href="/main" className="open">open</Link>}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })
      }

      {/* <section className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one" >
              <Image src={first} className='imgs h-full w-full absolute inset-0' alt='' ></Image>
              <h2 className="section-heading">Scroll down</h2>
            </div>
          </div>
        </div>

      </section>
      <section className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Image src={second} className='h-full w-full absolute inset-0' alt='' ></Image>

              <h2 className="section-heading">Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Image src={third} className='h-full w-full absolute inset-0' alt='' ></Image>

              <h2 className="section-heading">GreenSock</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Image src={fourth} className='h-full w-full absolute inset-0' alt='' ></Image>
              <h2 className="section-heading">Animation platform</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Image src={fifth} className='h-full w-full absolute inset-0' alt='' ></Image>

              <h2 className="section-heading">Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
