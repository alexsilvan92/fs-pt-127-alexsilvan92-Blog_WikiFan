import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PokeApi = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>PokeApi</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 