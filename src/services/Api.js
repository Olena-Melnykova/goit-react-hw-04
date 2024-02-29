import axios from "axios";

const ACCESS_KEY = '946wbrfEtORBlYStmXIUm38L_al_XuRs7PqK2lMqhnc';

export const getImages = async (search, page) => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos`, {
            params: {
                query: search,
                page: page,
                per_page: 12,
                client_id: ACCESS_KEY,
            }
        }
    );
    
    if (response.status !== 200) {
        throw new Error(`Bad response, ${response.status}`);
    }
    
    return response.data.results.map(formatImage);
};

const formatImage = image => ({
    id: image.id,
    description: image.alt_description, 
    webformatURL: image.urls.small, 
    largeImageURL: image.urls.regular, 
});