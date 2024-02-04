import style1 from "../about.module.css";
import Image from "next/image";
export default function Aboutsec1() {
  return (
    <div>
      <div className={style1.maincontainer}>
        <div className={style1.container}>
          <div className={style1.heading}>
            Driving Innovation in Online Education for a Brighter Future
          </div>
          <div className={style1.heading1}>
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </div>
          <div className={style1.imgcontainer}>
            <Image
              src="/assets/Images/aboutus1.webp"
              width={330}
              height={340}
            />
            <Image
              src="/assets/Images/aboutus2.webp"
              width={330}
              height={340}
            />
            <Image
              src="/assets/Images/aboutus3.webp"
              width={330}
              height={340}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
