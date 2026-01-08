import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const TheStarWarsApi = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>TheStarWarsApi</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 