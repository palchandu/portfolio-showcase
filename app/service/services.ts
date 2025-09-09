const API_URL = process.env.API_URL || 'http://localhost:1337';
export const getHeroSection = async () => {
  try {
    const response = await fetch(`${API_URL}/api/hero-section`);
    return response.json();
  } catch (error) {
    console.error('Error fetching hero section:', error);
    throw error;
  }
};

export const getAboutMe = async () => {
  try {
    const response = await fetch(`${API_URL}/api/about-me`);
    return response.json();
  } catch (error) {
    console.error('Error fetching about me section:', error);
    throw error;
  }
};

export const getExperience = async () => {
  try {
    const response = await fetch(`${API_URL}/api/experiences`);
    const data = await response.json();
    console.log('Fetched experiences:', data);
    return data.data; // Assuming the API returns an object with a 'data' property containing the array
  } catch (error) {
    console.error('Error fetching experience section:', error);
    throw error;
  }
};

export const getTechStack = async () => {
  try {
    const response = await fetch(`${API_URL}/api/tech-stacks?populate=*`);
    const data = await response.json();
    console.log('Fetched tech stacks:', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching tech stack section:', error);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await fetch(`${API_URL}/api/skills`);
    return response.json();
  } catch (error) {
    console.error('Error fetching skills section:', error);
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/api/projects?populate=*`);
    console.log('Fetched projects response:', response);
    const data = await response.json();
    console.log('Fetched projects data:', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching projects section:', error);
    throw error;
  }
};

// get site settings
export const getSiteSettings = async () => {
  try {
    const response = await fetch(`${API_URL}/api/site-setting`);
    const data = await response.json();
    console.log('Fetched site settings:', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
}
