import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import carousel from "@/styles/idProject/carousel.module.scss";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
    project: string[];
  }

export default class SimpleSlider extends Component<SimpleSliderProps> {
    render() {
        const { project } = this.props;
        const settings = {
            className: "center",
            centerPadding: "60px",
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true, // Agrega la opción autoplay para habilitar el desplazamiento automático
            autoplaySpeed: 2000,
        };

        return (
            <Slider {...settings}>
                {project.map((img : any, index : number)=>{
                    return(
                        <div key={index} className={carousel.contImg}>
                            <Image className={carousel.image} width={1280} height={720} src={img} alt="image" />
                        </div>
                    )
                })}
            </Slider>
        );
    }
}