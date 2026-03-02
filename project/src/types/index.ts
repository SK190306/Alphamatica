export interface Event {
  id: string;
  name: string;
  category: 'Indoor' | 'Outdoor' | 'Open';
  domain: 'MATHEMATICA' | 'ALPHABETICA';
  shortDescription: string;
  fullDescription: string;
  rules: string[];
  teamSize: string;
  timings: string;
  venue: string;
  facultyCoordinator: string;
  studentCoordinators: string[];
  contact: string;
}

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  image?: string;
  contact?: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  event: string;
  venue: string;
}
