"use client";
import Carousel from "@/components/carousel";

const items = [
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
  {
    id: "1",
    src: "https://fastly.picsum.photos/id/176/1000/1000.jpg?hmac=Kr7n-p8fvQrAQtwePUBXGAh8OL_56v5A7Jxo-WejGdg",
    onClick: () => console.log("Item 1 clicked"),
  },
  {
    id: "2",
    src: "https://fastly.picsum.photos/id/1067/1000/1000.jpg?hmac=n_7n4d-UmsjugCpnBwlomiVMC4Rz02TNeaQUYZz8dmM",
    onClick: () => console.log("Item 2 clicked"),
  },
  {
    id: "3",
    src: "https://fastly.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg",
    onClick: () => console.log("Item 3 clicked"),
  },
];

const HomePage = () => {
  return (
    <div
      style={{
        background: "white",
      }}
    >
      <h1>Carousel Demo</h1>
      <Carousel
        images={[...items, ...items]}
        parentWidth={800}
        className="custom-class"
      />
    </div>
  );
};

export default HomePage;
