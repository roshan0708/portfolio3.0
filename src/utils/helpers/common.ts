export const getAboutMe =
  (): string => ` Hi, I'm Roshan Kanwar, ${calculateAge()} YO, Software Developer, Competitive Coder, and Writer based out of
        India. I have a passion for building things that people love. I'm a self-taught developer, constantly working on my existing skills and also explore new tech as much as possible simultaneously. In my leisure time I like to watch anime, play
        games, and listen to music.`;

export const calculateAge = (): number => {
  return new Date().getFullYear() - new Date('2000-08-07').getFullYear();
};
