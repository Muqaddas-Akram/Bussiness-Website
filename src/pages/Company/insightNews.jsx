import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa"; 
import Network1 from "../../assets/Images/Artboard-2-2.webp";
import Network2 from "../../assets/Images/Artboard-3-2-1170x570@2x.webp";
import Network3 from "../../assets/Images/Artboard-2-2.webp";
import Network4 from "../../assets/Images/WhatsApp-Image-2023-09-18-at-16.32.42-370x208@2x.jpeg";
import Network5 from "../../assets/Images/Artboard-4-370x218@2x.webp";
import Network6 from "../../assets/Images/Artboard-5-370x218@2x.webp";
import Network7 from "../../assets/Images/blog-banner-370x208@2x.png";
import Network8 from "../../assets/Images/PHOTO-2023-08-30-10-46-42-370x185@2x.jpg";
import Network9 from "../../assets/Images/blog-banner-370x208@2x.png";
import Contact from '../../components/Contact/contact';

const images = [
  Network1, Network2, Network3, Network4, Network5,
  Network6, Network7, Network8, Network9
];

function InsightNews() {
  return (
    <>
    <div  className="text-blue-700 text-7xl mt-20 font-bold text-center">
      <h1>Fidelity Group News</h1>
      <div className="text-gray-400 text-xl mt-9 text-center">
        <h1>The latest news and insight from Fidelity Group</h1>
      </div>
    </div>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 mb-20">
        {images.map((image, index) => (
          <Card key={index} className="w-full">
            <CardBody>
              <img
                src={image}
                alt={`Card image ${index + 1}`}
                className="mb-4 h-48 w-full object-cover"
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Channel Champians 2024
              </Typography>
              <Typography>
              In the realm of the Internet of Things (IoT), data usage is often predictable …
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center text-red-600 gap-2">
                  Learn More
                  <FaArrowRight className="h-4 w-4" /> 
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    <Contact/>
    </>
  );
}

export default InsightNews;
