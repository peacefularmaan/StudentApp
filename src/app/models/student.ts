export interface Student {
  name: string;
  classLevel: '6' | '7' | '8' | '9';
  gender: 'Male' | 'Female';
  hasHobby: boolean;
  hobby?: string;
  favoriteSubject?: string;
}
