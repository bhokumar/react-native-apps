import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (mealId) => {},
    removeFavorite: (mealId) => {},
});

function FavoriteContextProvider({ children }) {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(mealId) {
        setFavoriteMealIds((current) => [...current, mealId]);
    }

    function removeFavorite(mealId) {
        setFavoriteMealIds((current) => current.filter((id) => id !== mealId));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
    };

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContextProvider;