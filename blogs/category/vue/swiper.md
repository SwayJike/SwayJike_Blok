---
title: swiper使用方法
date: 20121-12-20
tags:
- swiper使用方法
categories:
-  vue
---

# swiper使用方法

## 安装

```bash
cnpm i vue-awesome-swiper@3 -S	
```

## 局部导入

```
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
components: {
    swiper,
    swiperSlide
},
data() {
    return {
        swiperOption: {
            slidesPerView: 1,
            // spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: false
            },
            pagination: {
            el: '.swiper-pagination',
            clickable: true
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            }
        }
    }
}

```

## 常用swiperOption属性说明

详细说明参考官网 [文档链接](https://www.swiper.com.cn/api/autoplay/19.html)

* **spaceBetween**: 图片间距

* **autoplay**:设置为true启动自动切换，并使用默认的切换设置。
  * **delay**: 自动切换的时间间隔，单位ms
  * **disableOnInteraction**: 用户操作swiper之后，是否禁止[autoplay](https://www.swiper.com.cn/api/basic/2014/1213/16.html)。默认为true：停止。
    如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
    操作包括触碰(touch)，拖动，点击pagination等。
  * **pauseOnMouseEnter**:开启此功能，鼠标置于swiper时暂停自动切换，鼠标离开时恢复自动切换。
* 







