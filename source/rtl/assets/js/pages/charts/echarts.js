$(function (e) {
    'use strict'

    /* Chart data*/
    var chartdata = [
        {
            name: 'فروش',
            type: 'bar',
            data: [11, 14, 8, 16, 11, 13]
        },
        {
            name: 'سود',
            type: 'line',
            smooth: true,
            data: [10, 7, 17, 11, 15],
            symbolSize: 10,
        },
        {
            name: 'رشد',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ];

    /* Bar chart echartopt1*/
    var chart = document.getElementById('echart_bar_line');
    var barChart = echarts.init(chart);

    var option = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                }
            }

        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        series: chartdata,
        color: ['#9f78ff', '#fa626b', '#32cafe',]
    };

    barChart.setOption(option);


    var chartdata2 = [
        {
            name: 'فروش',
            type: 'line',
            smooth: true,
            data: [15, 22, 14, 31, 17, 41],
            symbolSize: 10,
            color: ['#FF8D60']
        },
        {
            name: 'سود',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            size: 10,
            data: [8, 12, 28, 10, 10, 12],
            color: ['#009DA0']
        }
    ];

    var chart2 = document.getElementById('echart_line');
    var barChart2 = echarts.init(chart2);
    var option2 = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                },
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: 'none'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        series: chartdata2,
    };
    barChart2.setOption(option2);



    /* Bar chart */

    /* Chart data*/
    var chartdata = [
        {
            name: 'فروش',
            type: 'bar',
            data: [13, 14, 10, 16, 11, 13]
        },

        {
            name: 'رشد',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ];


    var chart = document.getElementById('echart_bar');
    var barChart = echarts.init(chart);

    var option = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],

            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                }
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        series: chartdata,
        color: ['#9f78ff', '#32cafe']
    };

    barChart.setOption(option);


    /* Bar Graph */
    var chart = document.getElementById('echart_graph_line');
    var barChart = echarts.init(chart);

    barChart.setOption({
        title: {
            text: "عنوان گراف",
            subtext: "Graph Sub-text"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["فروش", "خرید"]
        },
        toolbox: {
            show: !1
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: ["2000", "2001", "2002", "2003", "2004", "2005"]
        }],
        yAxis: [{
            type: "value"
        }],
        series: [{
            name: "فروش",
            type: "bar",
            data: [22, 54, 37, 23, 25.6, 76],
            markPoint: {
                data: [{
                    type: "max",
                    name: "???"
                }, {
                    type: "min",
                    name: "???"
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }, {
            name: "خرید",
            type: "bar",
            data: [35, 45, 47, 10, 35, 70],
            markPoint: {
                data: [{
                    name: "فروش",
                    value: 182.2,
                    xAxis: 7,
                    yAxis: 183
                }, {
                    name: "خرید",
                    value: 2.3,
                    xAxis: 11,
                    yAxis: 3
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }],
        color: ['#9f78ff', '#32cafe']

    });

    /* Pie Chart */
    var chart = document.getElementById('echart_pie');
    var barChart = echarts.init(chart);

    barChart.setOption({
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: "center",
            y: "bottom",
            data: ["دسترسی مستقیم", "بازاریابی ایمیل", "آگهی اتحادیه", "تبلیغات ویدئویی", "موتور جستجو"]
        },

        calculable: !0,
        series: [{
            name: "نمودار داده",
            type: "pie",
            radius: "55%",
            center: ["50%", "48%"],
            data: [{
                value: 335,
                name: "دسترسی مستقیم"
            }, {
                value: 310,
                name: "بازاریابی ایمیلی"
            }, {
                value: 234,
                name: "آگهی اتحادیه"
            }, {
                value: 135,
                name: "تبلیغات ویدئویی"
            }, {
                value: 548,
                name: "موتور جستجو"
            }]
        }],
        color: ['#575B7A', '#DE725C', '#DFC126', '#72BE81', '#50A5D8']
    });

    /* line chart */
    var chart = document.getElementById('echart_area_line');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        title: {
            text: "گراف خطی",
            subtext: "Subtitle"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            x: 220,
            y: 40,
            data: ["اینترنت", "پیش سفارش", "معامله"]
        },
        toolbox: {
            show: !0,
            feature: {
                magicType: {
                    show: !0,
                    title: {
                        line: "Line",
                        bar: "Bar",
                        stack: "Stack",
                        tiled: "Tiled"
                    },
                    type: ["line", "bar", "stack", "tiled"]
                },
                restore: {
                    show: !0,
                    title: "بازیابی"
                },
                saveAsImage: {
                    show: !0,
                    title: "ذخیره تصویر"
                }
            }
        },
        calculable: !0,
        xAxis: [{
            type: "category",
            boundaryGap: !1,
            data: ["دو", "سه", "چهار", "پنج", "جمعه", "شنبه", "یک"]
        }],
        yAxis: [{
            type: "value"
        }],
        series: [{
            name: "معادله",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710]
        }, {
            name: "پیش سفارش",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 30, 10]
        }, {
            name: "قصد",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [1320, 1132, 601, 234, 120, 90, 20]
        }],
        color: ['#9f78ff', '#fa626b', '#32cafe',]
    });

    /* Sonar Chart */
    var chart = document.getElementById('echart_sonar');
    var sonarChart = echarts.init(chart);

    sonarChart.setOption({
        title: {
            text: "بودجه در مقابل هزینه",
            subtext: "Subtitle"
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "vertical",
            x: "right",
            y: "bottom",
            data: ["بودجه اختصاص یافته", "هزینه های واقعی"]
        },
        toolbox: {
            show: !0,
            feature: {
                restore: {
                    show: !0,
                    title: "بازیابی"
                },
                saveAsImage: {
                    show: !0,
                    title: "ذخیره تصویر"
                }
            }
        },
        polar: [{
            indicator: [{
                text: "فروش",
                max: 6e3
            }, {
                text: "مدیریت",
                max: 16e3
            }, {
                text: "فناوری اطلاعات",
                max: 3e4
            }, {
                text: "پشتیبانی مشتری",
                max: 38e3
            }, {
                text: "توسعه",
                max: 52e3
            }, {
                text: "بازاریابی",
                max: 25e3
            }]
        }],
        calculable: !0,
        series: [{
            name: "بودجه در مقابل هزینه",
            type: "radar",
            data: [{
                value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                name: "بودجه اختصاص یافته"
            }, {
                value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                name: "هزینه های واقعی"
            }]
        }]
    });

    /* Donut Chart */
    var chart = document.getElementById('echart_donut');
    var donutChart = echarts.init(chart);

    donutChart.setOption({
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: !0,
        legend: {
            x: "center",
            y: "bottom",
            data: ["دسترسی مستقیم", "بازاریابی ایمیل", "آگهی اتحادیه", "تبلیغات ویدئویی", "موتور جستجو"]
        },
        toolbox: {
            show: !0,
            feature: {
                magicType: {
                    show: !0,
                    type: ["pie", "funnel"],
                    option: {
                        funnel: {
                            x: "25%",
                            width: "50%",
                            funnelAlign: "center",
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: !0,
                    title: "بازیابی"
                },
                saveAsImage: {
                    show: !0,
                    title: "ذخیره تصویر"
                }
            }
        },
        series: [{
            name: "دسترسی به منابع",
            type: "pie",
            radius: ["35%", "55%"],
            itemStyle: {
                normal: {
                    label: {
                        show: !0
                    },
                    labelLine: {
                        show: !0
                    }
                },
                emphasis: {
                    label: {
                        show: !0,
                        position: "center",
                        textStyle: {
                            fontSize: "14",
                            fontWeight: "normal"
                        }
                    }
                }
            },
            data: [{
                value: 335,
                name: "دسترسی مستقیم"
            }, {
                value: 310,
                name: "بازاریابی ایمیل"
            }, {
                value: 234,
                name: "آگهی اتحادیه"
            }, {
                value: 135,
                name: "تبلیغات ویدئویی"
            }, {
                value: 1548,
                name: "موتور جستجو"
            }]
        }]
    });

});

