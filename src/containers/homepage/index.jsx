import React, { useEffect, useState } from "react";
import HomePageComponent from "../../components/homepage";
import nextId from "react-id-generator";
import "../information/styles.css";
import FALCONGATEProject from "../../assets/img/FALCONGATEProject.png";
import QAULITYANDSAFTY from "../../assets/img/QAULITYANDSAFTY.png";
import DiscoveryBLVDProject from "../../assets/img/DiscoveryBLVDProject.png";
import SUPERDOMProject from "../../assets/img/SUPERDOMProject.png";
import CityWalkProject from "../../assets/img/CityWalkProject.png";
import TheVenueProject from "../../assets/img/TheVenueProject.png";
import NinjaWarriorBLVDProject from "../../assets/img/NinjaWarriorBLVDProject.png";
import EquestrianClubProject from "../../assets/img/EquestrianClubProject.png";
import ABADIALJOHERProject from "../../assets/img/ABADIALJOHERProject.png";
import MountainBLVDProject from "../../assets/img/MountainBLVDProject.png";
import THEKINGDOMARENAProject from "../../assets/img/THEKINGDOMARENAProject.png";
import OURGOALS from "../../assets/img/OURGOALS.png";
import Spinner from "../../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";

// const getLanguagesIcons = () => {
//   var json = {
//     icons: [
//       {
//         id: 1,
//         alt: "HTML5",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
//       },
//       {
//         id: 2,
//         alt: "CSS3",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
//       },
//       {
//         id: 3,
//         alt: "JavaScript",
//         src: "https://img.icons8.com/dusk/64/000000/javascript-logo.png",
//       },
//       {
//         id: 4,
//         alt: "React",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
//       },
//       {
//         id: 5,
//         alt: "Redux",
//         src: "https://img.icons8.com/color/48/000000/redux.png",
//       },
//       {
//         id: 6,
//         alt: "NodeJS",
//         src: "https://img.icons8.com/color/48/000000/nodejs.png",
//       },
//       {
//         id: 7,
//         alt: "ExpressJS",
//         src: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
//       },
//       // {
//       // 	id: 8,
//       // 	alt: "Python",
//       // 	src: "https://img.icons8.com/color/48/000000/python.png",
//       // },
//       // {
//       // 	id: 9,
//       // 	alt: "SQL",
//       // 	src: "https://img.icons8.com/bubbles/50/000000/data-configuration.png",
//       // },
//       // {
//       // 	id: 10,
//       // 	alt: "MongoDB",
//       // 	src: "https://img.icons8.com/color/48/000000/mongodb.png",
//       // },
//       // {
//       // 	id: 11,
//       // 	alt: "PostgreSQL",
//       // 	src: "https://img.icons8.com/color/48/000000/postgreesql.png",
//       // },
//     ],
//   };
//   return json.icons;
// };

// const getToolsIcon = () => {
//   let json = {
//     icons: [
//       {
//         id: nextId(),
//         alt: "VScode",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
//       },
//       {
//         id: nextId(),
//         alt: "Git",
//         src: "https://img.icons8.com/color/48/000000/git.png",
//       },
//       {
//         id: nextId(),
//         alt: "Github",
//         src: "https://img.icons8.com/nolan/64/github.png",
//       },
//       {
//         id: nextId(),
//         alt: "Terminal",
//         src: "https://img.icons8.com/fluent/48/000000/console.png",
//       },
//       {
//         id: nextId(),
//         alt: "Katalon",
//         src: "https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
//       },
//       {
//         id: nextId(),
//         alt: "Photoshop",
//         src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
//       },
//       {
//         id: nextId(),
//         alt: "Premiere",
//         src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
//       },
//       {
//         id: nextId(),
//         alt: "Trello",
//         src: "https://img.icons8.com/color/48/000000/trello.png",
//       },
//       {
//         id: nextId(),
//         alt: "Slack",
//         src: "https://img.icons8.com/color/48/000000/slack-new.png",
//       },
//     ],
//   };
//   return json.icons;
// };

const getSocialsIcon = () => {
  let json = {
    socials: [
      {
        id: nextId(),
        alt: "Facebook",
        link: "https://www.facebook.com/aitcosa",
        src: "https://img.icons8.com/dusk/64/000000/facebook-new--v2.png",
      },
      {
        id: nextId(),
        alt: "Instagram",
        link: "https://www.instagram.com/aitcosa/",
        src: "https://img.icons8.com/clouds/100/000000/instagram-new--v3.png",
      },
      {
        id: nextId(),
        alt: "youtube",
        link: "https://www.youtube.com/@aitcosa",
        src: "https://img.icons8.com/clouds/100/000000/youtube.png",
      },
    
    ],
  };
  return json.socials;
};

const getPosts = () => {
  let json = {
    posts: [
      {
        id: nextId(),
        title: "QAULITY & SAFTY",
        description: "نعمل في AITCO وفق إجراءات الجودة والسلامة العالمية، حيث نسعى لتوفير كوادر بشرية ذات كفاءة عالية، ونستهدف المشروعات الكبرى التي تنفذ وفقاً لرؤى المملكة. كما نوفر كافة المتطلبات الإنشائية من أصول الشركة ومصانعها، ونتنوع في تقديم خدماتنا",

        imgSrc: QAULITYANDSAFTY,
        imgAlt: "QAULITYANDSAFTY-logo",
        link: "https://www.instagram.com/p/DGG1DR_s2AW/",
      },
      {
        id: nextId(),
        title: "Discovery-BLVD Project",
        description: "مشروع الديسكفري في بوليفارد وورلد هو جزء من التطوير المستمر لمشروع بوليفارد الرياض، الذي يهدف إلى تقديم تجارب ترفيهية متنوعة ومبتكرة",
        imgSrc: DiscoveryBLVDProject,
        imgAlt: "DiscoveryBLVDProject-logo",
        link: "https://www.instagram.com/p/DGBYWBiM4bc/",
      },
      {
        id: nextId(),
        title: "SUPERDOM Project",
        description: "تم تصميم جدة سوبر دوم ليكون مركزًا متعدد الاستخدامات، حيث يُمكنه استضافة مجموعة متنوعة من الفعاليات والأنشطة، بدءًا من المعارض والمؤتمرات وصولاً إلى الحفلات الموسيقية والفعاليات الرياضية. هذا التنوع يتيح للمشروع أن يلبي احتياجات مختلفة للجمهور ويوفر بيئة مثالية للاستمتاع بالفعاليات الضخمة",
        imgSrc: SUPERDOMProject,
        imgAlt: "SUPERDOMProject-logo",
        link: "https://www.instagram.com/p/DF8345GNS3H/",
      },
      {
        id: nextId(),
        title: "CityWalk Project",
        description: "مشروع بوليفارد سيتي ووك في جدة هو مشروع عقاري وتجاري يهدف إلى إنشاء مركز تجاري وترفيهي متكامل في قلب مدينة جدة",
        imgSrc: CityWalkProject,
        imgAlt: "CityWalkProject-logo",
        link: "https://www.instagram.com/p/DF5yJiaMSZn/",
      },
      {
        id: nextId(),
        title: "The Venue Project",
        description: "ذا فينيو، مكان يجمع بين الرياضة والتكنولوجيا والترفيه لتقديم تجربة فريدة وممتعة للمجتمع",
        imgSrc: TheVenueProject,
        imgAlt: "TheVenueProject-logo",
        link: "https://www.instagram.com/p/DF05gbFsKz7/",
      },
      {
        id: nextId(),
        title: "Ninja Warrior BLVD Project",
        description: "مشروع Ninja Warrior في البوليفارد هو فعالية ترفيهية تتيح هذه الفعالية للمشاركين اختبار مهاراتهم البدنية من خلال اجتياز سلسلة من التحديات الحركية المتنوعة",
        imgSrc: NinjaWarriorBLVDProject,
        imgAlt: "NinjaWarriorBLVDProject-logo",
        link: "https://www.instagram.com/p/DFyL3lfsUOJ/",
      },
      {
        id: nextId(),
        title: "Equestrian Club Project",
        description: "مشروع نادي الفروسية هو مشروع يهدف إلى توفير منشآت رياضية حديثة ومجهزة لتعزيز رياضة الفروسية وتقديم خدمات ترفيهية",
        imgSrc: EquestrianClubProject,
        imgAlt: "EquestrianClubProject-logo",
        link: "https://www.instagram.com/p/DFs2UcwM2kt/",
      },
      {
        id: nextId(),
        title: "ABADI AL-JOHERP roject",
        description: "المسرح يتميز بتصميمه العصري الذي يجمع بين الحداثة واللمسات الفنية التي تعكس الهوية السعودية، ويُعد مكانًا مثاليًا لاستضافة العروض الفنية والموسيقية الكبرى والفعاليات الاخرى",
        imgSrc: ABADIALJOHERProject,
        imgAlt: "ABADIALJOHERProject-logo",
        link: "https://www.instagram.com/p/DFqjffDsZW_/",
      },
      {
        id: nextId(),
        title: "FALCONGATEProject",
        description: "مشروع الصقر هو معلم تجميلي, يهدف إلى تحسين المظهر العام للشارع وإضافة لمسة جمالية, يعكس المشروع الكفاءة العالية في التنفيذ والابتكار في التصميم، مما يعزز من هوية الشارع ويجعل المنطقة أكثر جذبًا للزوار",
        imgSrc: FALCONGATEProject,
        imgAlt: "FALCONGATEProject-logo",
        link: "https://www.instagram.com/p/DFgWZhJMj04/",
      },
      {
        id: nextId(),
        title: "MountainBLVDProject",
        description: "الهدف من مشروع الجبل تقديم تجربة مميزة للزوار، حيث يعتبر من أكثر المشاريع إثارة في البوليفارد. يحتوي المشروع على مجموعة من المرافق السياحية، بالإضافة إلى مساحات مخصصة للفعاليات الثقافية والفنية. التصميم ذاته يحاكي الجبال الطبيعية ويعكس البيئة المحيطة بطريقة مبتكرة",
        imgSrc: MountainBLVDProject,
        imgAlt: "MountainBLVDProject-logo",
        link: "https://www.instagram.com/p/DFdcvdkMym_/",
      },
      {
        id: nextId(),
        title: "THEKINGDOMARENAProject",
        description: "تمكنت AITCO من بناء ملعب الأرينا في 90 يومًا فقط، متفوقة في تقديم مشروع رياضي عالمي بجودة عالية وفي وقت قياسي والدخول في موسوعة غينيس للأرقام القياسية مرتين كأكبر ملعب كرة قدم مغطى في العالم بناءً على المساحة، والرقم الثاني باعتبارة أكبر ملعب مغطى من ناحية المدرجات",
        imgSrc: THEKINGDOMARENAProject,
        imgAlt: "THEKINGDOMARENAProject-logo",
        link: "https://www.instagram.com/p/DFV3fzDsxfY/",
      },
      {
        id: nextId(),
        title: "OUR GOALS",
        description: "في AITCO، الجودة هي أساس عملنا. نحن نلتزم بتقديم حلول عالية الجودة تضمن تحقيق أقصى قدر من الكفاءة والفعالية لعملائنا. كل خطوة نخطوها تهدف إلى تحسين تجربتك وضمان رضاك التام",
        imgSrc: OURGOALS,
        imgAlt: "OURGOALS-logo",
        link: "https://www.instagram.com/p/DFV15-lsF2t/",
      },
    ],
  };
  return json.posts;
};

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const socials = getSocialsIcon();
  // const languages = getLanguagesIcons();
  // const tools = getToolsIcon();
  const posts = getPosts();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <HomePageComponent
            socials={socials}
            // languages={languages}
            // tools={tools}
            posts={posts}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
