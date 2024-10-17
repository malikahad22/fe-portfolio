import axios from "axios";
import { getMeRoute, getProjects, getSkill } from "../../api-routes";

export const getMeData = async () => {
   try {
      const response = await axios.get(getMeRoute, {
         params: {
            populate: '*'
         }
      });
      return response;
   } catch (error) {
      throw error;
   }
}


export const getProjectsData = async () => {
   try {
      const response = await axios.get(getProjects, {
         params: {
            populate: '*'
         }
      });
      return response;
   } catch (error) {
      throw error;
   }
}

export const getSkills = async () => {
   try {
      const response = await axios.get(getSkill, {
         params: {
            populate: '*'
         }
      });
      return response;
   } catch (error) {
      throw error;
   }
}

export const get = async (route) => {
   try {
      const { data = null } = await axios.get(route, {
         params: {
            populate: '*'
         }
      });
      if (!!data === false) throw new Error("No data found!");
      return data;
   } catch (error) {
      throw error;
   }
}