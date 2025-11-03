// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // 当页面滚动超过50px时
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
        // Lottie Animations for Feature Cards
        loadLottieAnimation('lottie-instant-translation', '/lottie/instant-translation.json');
        loadLottieAnimation('lottie-multi-language', '/lottie/multi-language.json');
        loadLottieAnimation('lottie-high-accuracy', '/lottie/high-accuracy.json');
        loadLottieAnimation('lottie-natural-tone', '/lottie/natural-tone.json');

        // Parallax effect for decorative shapes
        const parallaxShape1 = document.querySelector('.parallax-shape-1');
        const parallaxShape2 = document.querySelector('.parallax-shape-2');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            if (parallaxShape1) {
                parallaxShape1.style.transform = `translateY(${scrollY * 0.1}px)`;
            }
            if (parallaxShape2) {
                parallaxShape2.style.transform = `translateY(${scrollY * -0.05}px) rotate(45deg)`;
            }
        });
    });

// 应用场景标签页切换
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsEl = document.querySelector('.use-cases-section .tabs');
    const tabHeaderEl = document.querySelector('.use-cases-section .tab-header');

    // 计算并固定“应用场景”容器高度，防止切换引发下方模块位移
    function stabilizeUseCasesHeight() {
        if (!tabsEl) return;
        let maxHeight = 0;

        // 临时显示隐藏面板以测量真实高度
        tabContents.forEach((panel) => {
            const prevDisplay = panel.style.display;
            const prevPosition = panel.style.position;
            const prevVisibility = panel.style.visibility;

            const isActive = panel.classList.contains('active');
            if (!isActive) panel.style.display = 'block';
            panel.style.position = 'absolute';
            panel.style.visibility = 'hidden';

            const rect = panel.getBoundingClientRect();
            const panelHeight = panel.scrollHeight || rect.height;
            maxHeight = Math.max(maxHeight, panelHeight);

            panel.style.display = prevDisplay;
            panel.style.position = prevPosition;
            panel.style.visibility = prevVisibility;
        });

        const headerHeight = tabHeaderEl ? tabHeaderEl.offsetHeight : 0;

        // 计算 tabs 自身的上下内边距，避免重复或缺失空间
        const cs = getComputedStyle(tabsEl);
        const paddingTop = parseFloat(cs.paddingTop) || 0;
        const paddingBottom = parseFloat(cs.paddingBottom) || 0;

        const total = headerHeight + maxHeight + paddingTop + paddingBottom;
        tabsEl.style.height = `${total}px`;
    }

    stabilizeUseCasesHeight();
    window.addEventListener('resize', stabilizeUseCasesHeight);

    function activateTab(button) {
        const targetTab = button.dataset.tab;

        // 更新按钮状态
        tabButtons.forEach((b) => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
            b.setAttribute('tabindex', '-1');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        button.setAttribute('tabindex', '0');

        // 更新面板显示
        tabContents.forEach((content) => content.classList.remove('active'));
        const panel = document.getElementById(targetTab);
        if (panel) panel.classList.add('active');

        // 切换后再次稳固高度（处理懒加载或字体变化）
        stabilizeUseCasesHeight();
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => activateTab(button));
        button.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const dir = e.key === 'ArrowRight' ? 1 : -1;
                const nextIndex = (index + dir + tabButtons.length) % tabButtons.length;
                activateTab(tabButtons[nextIndex]);
            }
        });
    });
    
    // 初始化粒子动画
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#4A90E2"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#4A90E2",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // 初始化公司创建历史模块的粒子动画
        particlesJS('history-particles-js', {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FFFFFF" // 使用白色粒子
                },
                "shape": {
                    "type": "triangle", // 使用三角形粒子
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 7,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true, // 启用连接线
                    "distance": 150,
                    "color": "#CCCCCC", // 连接线颜色
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "top", // 向上移动
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 10,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.error('particles.js 库未加载');
    }
    // 光标追随辉光：监听每张功能卡片的鼠标移动，更新 CSS 变量
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;  // 相对卡片左上角的坐标
            const y = e.clientY - rect.top;
            card.style.setProperty('--mx', `${x}px`);
            card.style.setProperty('--my', `${y}px`);
        });
        card.addEventListener('mouseleave', () => {
            // 离开时回到中心，渐隐由 CSS 控制
            card.style.setProperty('--mx', `50%`);
            card.style.setProperty('--my', `50%`);
        });
    });
});