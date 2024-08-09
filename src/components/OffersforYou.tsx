import React from "react";
import {
  Row,
  Col,
  Stack,
  Panel,
  Text,
  TagGroup,
  Tag,
  Button,
  ButtonToolbar,
} from "rsuite";
import Image from "next/image";
import ResortImage from "../assets/images/Primilageimg.svg";
import HotelImage from "../assets/images/HotelImage.svg";
import FlightImageone from "../assets/images/FlightImage-one.svg";
import FlightImagetwo from "../assets/images/FlightImage-Two.svg";
import styles from "../assets/styles/OfferforYou.module.css";
import Calendar from "../assets/images/Calendar.svg";
import TimerAlert from "../assets/images/TimeRedIcon.svg";

const optionFilter = [
  {
    value: "all",
    key: "1",
    name: "All",
  },
  {
    value: "flights",
    key: "2",
    name: "Flights",
  },
  {
    value: "hotels",
    key: "3",
    name: "Hotels",
  },
  {
    value: "Cabs",
    key: "4",
    name: "Cabs",
  },
  {
    value: "bus",
    key: "5",
    name: "Bus",
  },
  {
    value: "train",
    key: "6",
    name: "Train",
  },
];

const cardData = [
  {
    image: ResortImage,
    text: "Pilgrimage Special: Upto 50% off on stays",
    subtext: "Valid till 30 Sep 24",
    tags: ["Flight", "Hotels", "Train", "Cabs"],
    icon: Calendar,
  },
  {
    image: HotelImage,
    text: "Book Hotel Royal Park  Starting @upto 20%",
    subtext: "Limited Period Offer",
    tags: ["Hotels"],
    icon: TimerAlert,
  },
  {
    image: FlightImageone,
    text: "Get 24x7 Live Assistance for int’t Flight Bookings!",
    subtext: "Valid till 30 Sep 24",
    tags: ["Flight"],
    icon: Calendar,
  },
  {
    image: FlightImagetwo,
    text: "Book Akasa Air Flights Starting @upto 20%",
    subtext: "Limited Period Offer",
    tags: ["Flights"],
    icon: TimerAlert,
  },
];

interface CardProps {
  image: string;
  text: string;
  subtext: string;
  tags: string[];
  icon: string;
}

const Card: React.FC<CardProps> = ({ image, text, subtext, tags, icon }) => (
  <Panel
    bordered
    bodyFill
    style={{
      padding: "0",
      textAlign: "center",
      height: "350px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <div style={{ flex: "1 1 50%", position: "relative", height: "200px" }}>
      <Image src={image} alt="Card Icon" layout="fill" objectFit="cover" />
    </div>
    <div style={{ color: "black", flex: "1 1 50%", padding: "10px", textAlign: "left" }}>
      <TagGroup
        style={{ margin: "10px 5px", display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}
      >
        {tags.map((tag) => (
          <Tag key={tag} size="lg" style={{ margin: "5px" }}>
            {tag}
          </Tag>
        ))}
      </TagGroup>

      <Stack style={{ display: "flex", justifyContent: "flex-start", marginTop: "10px" }}>
        <Text style={{ fontWeight: "bold", wordBreak: "break-word" }}>{text}</Text>
      </Stack>
      <Stack
        style={{
          display: "flex",
          marginLeft: "0px",
          marginTop: "5px",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ display: "flex", alignItems: "center" }}>
          <Image src={icon} alt="Calendar Icon" width={20} height={20} />
          <small style={{ marginLeft: "5px" }}>{subtext}</small>
        </Text>
      </Stack>
    </div>
  </Panel>
);

const OffersforYou: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");
  return (
    <div style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
      <div style={{ textAlign: "center" }}>
        <Stack className={styles.heading}>
          <h3>
            <span style={{ color: "blue" }}>Offers</span> for you
          </h3>
        </Stack>
        <Stack style={{ margin: "20px 0px" }}>
          <ButtonToolbar>
            {optionFilter.map((item) => (
              <Button
                key={item.key}
                active={activeFilter === item.value}
                onClick={() => setActiveFilter(item.value)}
                appearance={activeFilter === item.value ? "primary" : "default"}
                size="md"
              >
                {item.name}
              </Button>
            ))}
          </ButtonToolbar>
        </Stack>
        <Row gutter={16}>
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                image={card.image}
                text={card.text}
                subtext={card.subtext}
                tags={card.tags}
                icon={card.icon}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OffersforYou;