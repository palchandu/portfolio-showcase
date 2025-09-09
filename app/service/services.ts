const API_URL = process.env.API_URL || "http://localhost:1337";
export const getHeroSection = async () => {
  try {
      const response = await fetch(`${API_URL}/api/hero-section`);
    return response.json();
  } catch (error) {
    console.error("Error fetching hero section:", error);
    throw error;
  }
};

export const getAboutMe = async () => {
  try {
    const response = await fetch(`${API_URL}/api/about-me`);
    return response.json();
  } catch (error) {
    console.error("Error fetching about me section:", error);
    throw error;
  }
}

export const getExperience = async () => {
  try {
    const response = await fetch(`${API_URL}/api/experiences`);
    return response.json();
  } catch (error) {
    console.error("Error fetching experience section:", error);
    throw error;
  }
}

export const getSkills = async () => {
  try {
    const response = await fetch(`${API_URL}/api/skills`);
    return response.json();
  } catch (error) {
    console.error("Error fetching skills section:", error);
    throw error;
  }
}

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/api/projects`);
    return response.json();
  } catch (error) {
    console.error("Error fetching projects section:", error);
    throw error;
  }
}
export const getContactInfo = async () => {
  try {
    const response = await fetch(`${API_URL}/api/contact-info`);
    return response.json();
  } catch (error) {
    console.error("Error fetching contact info section:", error);
    throw error;
  }
}


