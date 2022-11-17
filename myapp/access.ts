
type Session = {
    data: {
      id: string;
      isAdmin: boolean;
    }
  }

export const isAdmin = ({ session }: { session: Session }) =>
  session?.data.isAdmin;
