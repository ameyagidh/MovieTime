import FavoritesDAO from '../dao/favoritesDAO.js';
import MoviesDAO from '../dao/moviesDAO.js';

export default class FavoritesController {
     static async apiUpdateFavorites(req, res, next) {
        try {
            const  FavoritesResponse = await  FavoritesDAO.updateFavorites(
                req.body._id,
                req.body.favorites
            )


            var { error } = FavoritesResponse
            if(error) {
                res.status(500).json({ error});
            }

            if (FavoritesResponse.modifiedCount === 0) {
                throw new Error ("Unable to update favorites. ")
            }
            res.json({ status: "Success "});
        } catch(e) {
            res.status(500).json({ error: e.message})
        }
     }



     static async apiGetFavorites(req, res, next) {
        try {
            let id = req.params.userId;
            let favorites = await FavoritesDAO.getFavorites(id);
            if(!favorites) {
                res.status(404).json({ error: "not found" });
                return;
            }
            res.json(favorites);
        }catch(e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error:e })
        }
     }
     

     static async apiGetFavoritesMovies(req, res, next) {
        try {
            let id = req.params.userId;
            let favorites = await FavoritesDAO.getFavorites(id);
            favorites = favorites?.favorites;
            if(favorites){
                const out = [];
                for(let i = 0; i < favorites.length; i++){
                    let temp = await MoviesDAO.getMovieById(favorites[i]);
                    if(temp){
                    temp = {
                        _id : temp._id, 
                        id : i + 1, 
                        title : temp.title, 
                        poster : temp.poster
                    };
                    out.push(temp);
                }}
                res.json(out);
            } else{
            res.json({});
            }
        }catch(e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error:e })
        }
     }
     
     
}