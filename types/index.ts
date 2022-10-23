export type Room = {
  id?: string;
  title: any;
  description?: string;
  image?: string;
};
export type dbRoom = {
  id: string;
  created_at: string;
  room_name: string;
  user_id: string;
  room_bg_image: string;
};
export type dbUser = {
  app_metadata: {
    provider: string;
    providers: string[];
  };
  aud: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  id: string;
  identities: [
    {
      created_at: string;
      id: string;
      identity_data: {
        sub: string;
      };
      last_sign_in_at: string;
      provider: string;
      updated_at: string;
      user_id: string;
    },
  ];
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
  user_metadata: Record<string, unknown>;
};

export type HomeData = {
  data: {
    roomsData: dbRoom[];
    user: dbUser;
  };
};
