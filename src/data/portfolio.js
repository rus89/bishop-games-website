// ABOUTME: Portfolio project data for the main page gallery.
// ABOUTME: Each project has a category and optional featured flag for hero display.

export const projects = [
  { id: 'project-1',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'full-game',      image: '',  featured: true  },
  { id: 'project-2',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'full-game',      image: '',  featured: true  },
  { id: 'project-3',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'full-game',      image: '',  featured: true  },
  { id: 'project-4',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'art-animation',  image: '',  featured: false },
  { id: 'project-5',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'art-animation',  image: '',  featured: false },
  { id: 'project-6',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'art-animation',  image: '',  featured: false },
  { id: 'project-7',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'art-animation',  image: '',  featured: false },
  { id: 'project-8',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'live-ops',       image: '',  featured: false },
  { id: 'project-9',  title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'live-ops',       image: '',  featured: false },
  { id: 'project-10', title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'full-game',      image: '',  featured: false },
  { id: 'project-11', title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'art-animation',  image: '',  featured: false },
  { id: 'project-12', title: '[PROJECT NAME]', description: '[PROJECT DESCRIPTION]', category: 'full-game',      image: '',  featured: false },
];

export const filterProjects = (projectList, categoryId) => {
  if (categoryId === 'all') return projectList;
  return projectList.filter((p) => p.category === categoryId);
};

export const getFeaturedProjects = (projectList) => {
  return projectList.filter((p) => p.featured);
};
