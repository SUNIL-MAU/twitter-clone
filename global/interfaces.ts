export interface TwitterSidebarMenu {
  title: string;
  icon: React.ReactNode;
}

export interface UserType {
  id: string;
  firstName: string;
  lastName?: string | null | undefined;
  email: string;
  profileImageUrl?: String | null;
}
