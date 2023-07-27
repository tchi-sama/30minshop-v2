export type sectionType = headerType | heroType;

export interface headerType {
  type: "header";
  properties: {
    // general
    general?: {
      headerColor?: string;
      headerHeight?: number; // between 20 and 30
    };

    // props for the text logo
    logoText?: {
      text: string;
      color?: string;
      size?: number;
      show?: boolean;
    };

    // props for the image logo
    logo?: {
      url: string;
      size?: number;
      show?: boolean;
    };

    // props for the links
    links?: {
      linksArray?: {
        name: string;
        url: string;
        show: boolean;
      }[];
      show?: boolean;
      align?: "left" | "center" | "right";
    };

    // props for the btns
    showSearchButton?: {
      show: boolean;
    };
    showCartButton?: {
      show: boolean;
    };
  };
}

export interface heroType {
  type: "hero";
  properties: {
    // general
    general?: {
      height?: number;
      backgroundImage?: string;
      backgroundColor?: string;
    };

    // Props for the hero image
    heroImage?: {
      url: string;
      show: boolean;
    };

    // Props for the hero content
    title?: {
      text: string;
      color: string;
      show: boolean;
    };

    subtitle?: {
      text: string;
      color: string;
      show: boolean;
    };
    ctaButton?: {
      text: string;
      bgColor: string;
      txtColor: string;
      url: string;
      show: boolean;
    };
  };
}

export interface bestServices {
  type: "cards";
  properties: {
    // general
    general?: {
      height?: number;
      backgroundColor?: string;
    };

    cards?: {
      cardsArray?: {
        title: string;
        text: string;
        icon: string;
        textColor: string;
        backgroundColor: string;
      }[];
    };
  };
}

export interface contactSection {
  type: "contact";
  properties: {
    // general
    general?: {
      height?: number;
      backgroundColor?: string;
    };

    // Contact details
    contactDetails?: {
      address?: string;
      email?: string;
      phone?: string;
    };

    // Contact form configuration
    contactForm?: {
      showNameField?: boolean;
      showEmailField?: boolean;
      showSubjectField?: boolean;
      showMessageField?: boolean;
      buttonText?: string;
    };
  };
}

export interface footerSection {
  type: "footer";
  properties: {
    // general
    general?: {
      height?: number;
      backgroundColor?: string;
    };

    about?: {
      logo?: string;
      aboutUs?: string;
    };
    // Footer content
    contact?: {
      address?: string;
      email?: string;
      phone?: string;
    };

    socialLinks?: {
      platform: string;
      link: string;
    }[];
  };
}
