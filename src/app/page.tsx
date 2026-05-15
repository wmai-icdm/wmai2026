import Hero from "@/components/Hero";
import About from "@/components/About";
import CallForPapers from "@/components/CallForPapers";
import ImportantDates from "@/components/ImportantDates";
import Committees from "@/components/Committees";
import Submission from "@/components/Submission";
import Speakers from "@/components/Speakers";
import Program from "@/components/Program";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-16">

      {/* Phần Banner chào mừng & tóm tắt địa điểm, thời gian */}
      <Hero />

      {/* Section I: Mô tả Workshop & Tầm nhìn AMI của Yann LeCun */}
      <About />

      {/* Section II: Các chủ đề quan tâm (Topics of Interest) */}
      <CallForPapers />

      {/* Section II (tiếp): Hướng dẫn nộp bài, định dạng IEEE, quy trình Single-blind */}
      <Submission />

      {/* Bảng các mốc thời gian quan trọng */}
      <ImportantDates />

      {/* Section IV: Danh sách Diễn giả khách mời (Dự kiến từ Meta FAIR, DeepMind) */}
      {/* <Speakers /> */}

      {/* Section V: Chương trình chi tiết nửa ngày (08:30 - 12:30) */}
      <Program />

      {/* Section VI & VII: Thông tin Ban tổ chức (Organizers) và Hội đồng PC */}
      <Committees />

    </main>
  );
}
