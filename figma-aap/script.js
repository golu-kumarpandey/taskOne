let count = 0;

const genrateUniqId = () => {
  count += 1;
  console.log(count, "count");
  return count;
};

const navBar = [
  {
    id: genrateUniqId(),
    text: "Home",
  },
  {
    id: genrateUniqId(),
    text: "Shop",
  },
  {
    id: genrateUniqId(),
    text: "Product",
  },
  {
    id: genrateUniqId(),
    text: "Contact Us",
  },
];

const articalData = [
  {
    id: genrateUniqId(),
    img: "./figma-aap/assest/img-container.png",
    title: "7 ways to decor your home",
    link: "Read more",
  },
  {
    id: genrateUniqId(),
    img: "./figma-aap/assest/img-container2.png",
    title: "Kitchen organization",
    link: "Read more",
  },
  {
    id: genrateUniqId(),
    img: "./figma-aap/assest/img-container3.png",
    title: "Decor your bedroom",
    link: "Read more",
  },
];

const footerData = [
  {
    id: genrateUniqId(),
    text: "Home",
  },
  {
    id: genrateUniqId(),
    text: "Shop",
  },
  {
    id: genrateUniqId(),
    text: "Product",
  },
  {
    id: genrateUniqId(),
    text: "Blog",
  },
  {
    id: genrateUniqId(),
    text: "Contect Us",
  },
];

const headerData = [...footerData];

const mobileList = document.getElementById("mobileList");
const menuBar = document.getElementById("menuBar");
const menuIcon = document.getElementById("meuIcon");
const moreArticle = document.getElementById("moreArticle");
const fotterNavigation = document.getElementById("fotterNavigation");
const headerMenuBar = document.getElementById("headerMenuBar");

const makingCardSlider = () => {
  $(document).ready(function () {
    const $cardSlider = $(".cardSlider");

    if ($cardSlider.hasClass("slick-initialized")) {
      $cardSlider.slick("unslick");
    }

    $cardSlider.slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
};

$(document).ready(function () {
  const $slider = $(".slider");

  $($slider).slick({
    dots: false,

    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    // ],
  });

  $(".prev").on("click", () => {
    $(".slider").slick("slickPrev");
  });

  $(".next").on("click", () => {
    $(".slider").slick("slickNext");
  });

  const $customeDot = $("#customeDot");
  const slickObject = $slider.slick("getSlick");
  const slideCount = slickObject.slideCount;

  const slideToShow = slickObject.options.slidesToShow;

  const slideToScroll = slickObject.options.slidesToScroll;

  const getTotaleButton =
    Math.ceil((slideCount - slideToShow) / slideToScroll) + 1;

  function addActivedot(i) {
    $("#customeDot button").removeClass("w-[30px]").addClass(" w-[8px]");

    $($("#customeDot button")[i]).removeClass("w-[8px]").addClass("w-[30px]");

    $slider.slick("slickGoTo", i * slideToShow);
  }

  $slider.on("afterChange", (event, slick, currentSlide) => {
    addActivedot(currentSlide);
  });

  for (let i = 0; i < getTotaleButton; i++) {
    const $button = $("<button>")
      .addClass(
        ` ${
          i === 0 ? " w-[30px] " : " w-[8px] "
        } h-[20px] h-[8px] h-[8px] w-[20px] text-white rounded-full bg-[#ffffff] rounded-full`
      )
      .on("click", () => {
        addActivedot(i);
      });

    $("#customeDot").append($button);
  }

  $();
});

const createFooterList = () => {
  footerData.map((e) => {
    const list = `
         <li>  <a href="#" class="text-white text-[14px] hover:underline">${e.text}</a> </li>
       
       `;
    fotterNavigation.innerHTML += list;
  });
};

createFooterList();

const createNavbarList = (list) => {
  navBar.forEach((list) => {
    const mobileListContent = `
        <li class="border-b-[#E8ECEF] border-b-[1px] mb-[16px]">
          <button class="mb-[24px] text-[19spx]  text-[#141718] flex justify-between items-center w-full">
           <a href="#" class="text-[14px] font-[500]">${list.text}</a>
          ${
            list.id === 3 || list.id === 4
              ? '<i class="fa-solid fa-chevron-down font-[14px]"></i>'
              : ""
          }
          </button>
        </li>
   `;
    mobileList.innerHTML += mobileListContent;
  });
};
createNavbarList();

function closeClick() {
  menuBar.classList.toggle("-translate-x-full");
  menuBar.classList.toggle("translate-x-0");
}
menuIcon.addEventListener("click", () => {
  closeClick();
});

// getting api function
const createCart = (cart) => {
  const { category, description, id, image, price, ratting, title } = cart;

  const cartContent = `
 
    <li class="w-[250px] sm:w-[300px]  mr-[10px] sm:mr-[20px]">
      <div class="p-[10px] shadow-md rounded mb-[12px]">
        <div class="bg-[url('${image}')] bg-cover h-[300px] flex flex-col justify-between p-[10px]">
          <div class="flex justify-between items-baseline">
          
              <div class="flex gap-[10px] flex-col">
                <div class="py-[5px] px-[10px] bg-sky-100 rounded">
                  <span class="text-[#41718] text-[16px] font-bold">New</span>
                </div>
                <div class="py-[5px] px-[10px] bg-[#38CB89] rounded">
                  <span class="text-white text-[16px] font-bold">-50%</span>
                </div>
              </div>

              <div
                class="h-[32px] w-[32px] rounded-full bg-sky-100 flex justify-center items-center"
              >
                <i class="fa-regular fa-heart text-[#6C7275]"></i>
              </div>
         
          </div>


        

        </div>
      </div>

      <div class="">
         <div class="text-[#343839] font-[14px] ">
             ${[...new Array(4)]
               .map((_, i) =>
                 i === 3
                   ? '<i class="fa-solid fa-star-half-stroke"></i>'
                   : '<i class="fa-solid fa-star"></i>'
               )
               .join("")}
         </div>
        <h2 class="text-[16px] font-semibold">${title}</h2>

        <div class="mt-2 font-bold text-[#38CB89] text-[14px]">$${price} <span class="text-[14px] text-[#6C7275] line-through">$ ${price}</span></div>
      </div>
    </li>

  `;

  articleContainer.innerHTML += cartContent;
};

const getProduct = async () => {
  const apiurl = "https://fakestoreapi.com/products?limit=6";
  const response = await fetch(apiurl);
  const data = await response.json();
  data.forEach((cart) => createCart(cart));
  setTimeout(() => {
    makingCardSlider();
  }, 100);
};

getProduct();

const createArticale = () => {
  articalData.forEach((e) => {
    const content = `
      <div class="mb-[24px]  sm:grow">
         <div class="h-[283px] mb-[16px]">
            <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover"/>
         </div>

         <div>
            <h2 class="text-[20px] text-[#23262F] font-bold mb-[8px]">${e.title}</h2>
             <span class="border-b-[1px] border-b-[#141718]">
                 <a href="#" class="text-[16px] font-bold text-[#141718]">${e.link}</a>
                 <i class="fa-solid fa-arrow-right-long text-[#141718] "></i>
             </span>
         </div>
      </div>
    `;
    moreArticle.innerHTML += content;
  });
};

createArticale();
let activeId = headerData[0].id;

function onClickItem(id) {
  activeId = id;
  createHeaderMenu();
}

const createHeaderMenu = () => {
  headerMenuBar.innerHTML = "";
  headerData.forEach((e) => {
    const menuContent = `
      <li >
        <a href="#" onclick="onClickItem(${e.id})" class="  text-[14px]  ${
      activeId === e.id ? "text-[#141718]  underline" : "text-[#6C7275]"
    }">${e.text}</a>
      </li>
    `;
    headerMenuBar.innerHTML += menuContent;
  });
};

createHeaderMenu();
