export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
    city: string;
    mapLink?: string;
  };
  registrationLink?: string;
  tags: string[];
  content?: string;
  featured?: boolean;
  status: "upcoming" | "past" | "recurring";
  galleryImages?: Array<{
    src: string;
    span: string;
    alt: string;
  }>;
}

export const events: Event[] = [
  {
    id: "aachen-robotics-conference-2025",
    slug: "aachen-robotics-conference",
    title: "Aachen Robotics Conference",
    description: "A community-focused robotics meetup aimed at connecting industry professionals, researchers, and students in Aachen.",
    image: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
    date: "October 16, 2025",
    time: "2:00 PM - 5:30 PM",
    location: {
      name: "Digital Church",
      address: "Jülicher Str. 72 a",
      city: "52070 Aachen, Germany",
      mapLink: "https://maps.google.com/maps?q=Digital+Church,+Jülicher+Str.+72+a,+52070+Aachen,+Germany"
    },
    registrationLink: "https://lu.ma/dh0z4i3g",
    tags: ["networking", "meetup", "robotics", "community", "innovation", "projects"],
    content: "Join us for a community-focused robotics meetup that brings together industry professionals, researchers, and students. This event provides the perfect platform for professional networking, knowledge exchange, and collaboration in the robotics field.\n\nEvent Highlights:\n• Professional networking with industry experts and fellow robotics enthusiasts\n• Short project pitches showcasing innovative robotics solutions\n• Interactive session with multiple project exhibition booths\n• Meet potential employers, partners, or clients in the robotics community\n• Complimentary drinks and pizza for all attendees\n\nThis bilingual event (English and German) welcomes participants from all experience levels, from beginners to seasoned professionals. Whether you're looking to showcase your latest project, find collaboration opportunities, or simply connect with the local robotics community, this meetup offers valuable networking and learning opportunities.\n\nLimited spots available: 140 general admission tickets and 6 exhibitor tickets for those presenting projects.",
    featured: true,
    status: "upcoming",
    galleryImages: [
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
        span: "col-span-2 row-span-2",
        alt: "Aachen Robotics Conference main stage"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684646-3_h250bh.jpg",
        span: "col-span-2 row-span-2",
        alt: "Conference attendees networking"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137781/openroboverse/Meetup/meetup_back_cjvymg.jpg",
        span: "col-span-2 row-span-1",
        alt: "Exhibition area"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137776/openroboverse/Meetup/meetup_pre_up1_fohztd.jpg",
        span: "col-span-2 row-span-1",
        alt: "Technical presentations"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684504-2_c3oalr.jpg",
        span: "col-span-1 row-span-1",
        alt: "Robotics demonstrations"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727138102/openroboverse/Meetup/meetup_pre_up3_ojmush.jpg",
        span: "col-span-1 row-span-1",
        alt: "Industry partnerships"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684425_qqtque.jpg",
        span: "col-span-2 row-span-1",
        alt: "Conference workshops"
      }
    ]
  },
  {
    id: "meetup-apr-2025",
    slug: "meetup",
    title: "Robotics Community Meetup",
    description: "Join our Robotics Community Meetups designed to foster collaboration, knowledge exchange, and networking within the local robotics community.",
    image: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
    date: "April 23, 2025",
    time: "6:30 PM - 9:00 PM",
    location: {
      name: "Digital Church",
      address: "Digital Church",
      city: "Aachen, Germany",
      mapLink: "https://maps.google.com/maps?q=Digital+Church,+Aachen,+Germany"
    },
    registrationLink: "https://lu.ma/e61lkaj1",
    tags: ["networking", "community", "workshop", "robotics"],
    content: "Our Robotics Community Meetups are designed to foster collaboration, knowledge exchange, and networking within the local robotics community. Join us to connect with like-minded enthusiasts, share ideas, and stay at the forefront of robotics innovation.",
    featured: true,
    status: "past",
    galleryImages: [
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
        span: "col-span-2 row-span-2",
        alt: "orom logo picture meetup #1"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684646-3_h250bh.jpg",
        span: "col-span-2 row-span-2",
        alt: "orom logo picture meetup #2"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137781/openroboverse/Meetup/meetup_back_cjvymg.jpg",
        span: "col-span-2 row-span-1",
        alt: "Orom stand"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137776/openroboverse/Meetup/meetup_pre_up1_fohztd.jpg",
        span: "col-span-2 row-span-1",
        alt: "Adience Elysee"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684504-2_c3oalr.jpg",
        span: "col-span-1 row-span-1",
        alt: "WZL Pitch"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727138102/openroboverse/Meetup/meetup_pre_up3_ojmush.jpg",
        span: "col-span-1 row-span-1",
        alt: "Vectioneer stand"
      },
      {
        src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684425_qqtque.jpg",
        span: "col-span-2 row-span-1",
        alt: "Siemens Pitch"
      }
    ]
  },
  {
    id: "info-session-2025",
    slug: "robotics-workshop",
    title: "Info Session",
    description: "An informational session about robotics projects and opportunities within the Robotics Collective.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "June 15, 2025",
    time: "5:00 PM - 7:00 PM",
    location: {
      name: "Robotics Lab",
      address: "Jülicher Str. 209q-s",
      city: "Aachen, Germany",
      mapLink: "https://maps.google.com/maps?q=Jülicher+Str.+209q-s,+52070+Aachen,+Germany"
    },
    registrationLink: "https://example.com/register-info-session",
    tags: ["information", "introduction", "beginners", "projects"],
    content: "This info session is perfect for newcomers and anyone interested in learning about our ongoing projects and how to get involved. We'll provide an overview of the Robotics Collective, current initiatives, and ways to participate in our community.",
    featured: true,
    status: "upcoming",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        span: "col-span-2 row-span-2",
        alt: "Robotics info session"
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        span: "col-span-2 row-span-1",
        alt: "Robotics presentation"
      }
    ]
  },
  {
    id: "hackaton-2025",
    slug: "summer-robotics-conference",
    title: "Robotics Hackathon",
    description: "A weekend-long hackaton bringing together robotics enthusiasts to build innovative solutions to real-world problems.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "August 10-12, 2025",
    time: "9:00 AM - 10:00 PM",
    location: {
      name: "Convention Center",
      address: "Conference Hall",
      city: "Aachen, Germany",
      mapLink: "https://maps.google.com/maps?q=Convention+Center,+Aachen,+Germany"
    },
    registrationLink: "https://example.com/register-hackaton",
    tags: ["hackaton", "competition", "innovation", "teamwork"],
    content: "The Robotics Hackaton is an intensive, collaborative event where participants form teams to design, prototype, and present robotics solutions within a short timeframe. Whether you're a programmer, designer, engineer, or robotics enthusiast, join us for a weekend of creativity and innovation.",
    featured: true,
    status: "upcoming",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        span: "col-span-2 row-span-2",
        alt: "Hackaton venue"
      },
      {
        src: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        span: "col-span-2 row-span-1",
        alt: "Team collaboration"
      }
    ]
  }
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return events.map((event) => event.slug);
}