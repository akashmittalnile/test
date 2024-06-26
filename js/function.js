$( document ).ready(function() {
    $(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
      if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });

  $(".toggle-sidebar").click(function() {
    $(".main-site").toggleClass("toggled");
  });
  $("#show-sidebar").click(function() {
   $(".main-site").addClass("toggled");
  });
     
});



$(document).ready(function(){    
    $("#rest-profile-slider").owlCarousel({
      loop:false,
      margin:0,
      nav:true,
      dots:false,
      responsive:{
        0:{
        items:1
        },
        600:{
        items:1
        },
        1000:{
        items:1
        }
      }
    });
});







$(document).ready(function(){
        var options = {
          series: [22, 44, 34,],
          labels: ['Recent Orders', 'Pending Payments', 'Received Payments'],
          chart: {
          type: 'donut',
        },
        colors: ['#0089CF','#29913B', '#ffc40c'],
        
        legend: {
          show: true,
          position: 'bottom',
          markers: {
            width: 7,
            height: 7,
            shape: 'square',
            radius: 0,
          }
        },
       
        };

        var chart = new ApexCharts(document.querySelector("#vendorsale"), options);
        chart.render();
      







//Sales Chart
var options = {
  chart: {
    height: 450,
    type: "line",
    stacked: false,
    toolbar: {
        show: false,
        
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#0089CF','#29913B', '#ffc40c'],
  series: [{
    name: 'Active Vendor',
    type: 'column',
    data: [104, 102, 117, 146, 118, 115, 220, 103, 83, 114, 265, 174],
  }, {
    name: "Payment received",
    type: "column",
    data: [92, 75, 123, 111, 196, 122, 159, 102, 138, 136, 62, 240]
  }, {
    name: 'Vendor Perfomance Graph Structure',
    type: 'line',
    data: [35, 52, 86, 65, 102, 70, 152, 87, 55, 92, 170, 80],
  }],
  stroke: {
    width: [0, 0, 2]
  },
  plotOptions: {
    bar: {
      columnWidth: '25%',
    }
  },
  markers: {
    size: [0, 0, 3],
    colors: undefined,
    strokeColors: "#000",
    strokeOpacity: 0.6,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: [0, 0, 2],
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
    hover: {
      sizeOffset: 3
    }
  },
  fill: {
    opacity: [1, 1, 1]
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  legend: {
    show: true,
    position: 'bottom',
    markers: {
      width: 7,
      height: 7,
      shape: 'square',
      radius: 0,
    }
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    title: {
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    
  },
  xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90
    }
  },
  tooltip: {
    enabled: true,
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
};
var chart1 = new ApexCharts(document.querySelector("#VendorPayment"), options);
chart1.render();
      
});


$(function() {
  var options = {
    series: [
        {
          name: 'W',
          data: [4, 2, 5, 3, 7]
        }
    ],
    chart: {
        height: 100,
        type: 'area',
        toolbar: {
            show: false
        },
      
    },
    colors: ["#ffc40c"],
   
    stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: 3,
    },
   
    fill: {
        type: 'gradient',
        opacity: 0.1,
        gradient: {
            type: "vertical",
            opacityFrom: 0.65,
            opacityTo: 0.3,
            stops: [0,100]

        },
    },
    
    yaxis:{
        labels: {
           
            show: false,
        },
    },
    xaxis: {
       
      
        show: false,
        labels: {
           
            show: false,
        },
        tooltip: {
            enabled: false
          },
        axisBorder: {
            show: false,
        },
        crosshairs: {
            show: false,
           
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        style: {
          fontSize: '12px',
        },
        x: {
            show: false,
        },
        y: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
        padding: {
            left: -10,
            right: 0,
            bottom: 0,
            // top: -35
        }
    },
    responsive: [
        {
          breakpoint: 1600,
          options: {
            chart: {
                height: 100,
            }
          }
        }
      ]
    };

        var chart = new ApexCharts(document.querySelector("#Rating-chart"), options);
        chart.render();
    });



  $(document).ready(function($){
    //open the lateral panel
    $('.cd-btn').on('click', function(event){
      event.preventDefault();
      $('.cd-panel').addClass('is-visible');
    });

    //clode the lateral panel
    $('.cd-panel').on('click', function(event){
      if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
        $('.cd-panel').removeClass('is-visible');
        event.preventDefault();
      }
    });
  });
