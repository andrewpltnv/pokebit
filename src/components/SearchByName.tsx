import { AutoComplete, Input } from "antd";
import { Form, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//https://redux-toolkit.js.org/rtk-query/usage/prefetching#recipe-prefetch-immediately

/**
  
 type EndpointNames = keyof typeof api.endpoints

export function usePrefetchImmediately<T extends EndpointNames>(
  endpoint: T,
  arg: Parameters<(typeof api.endpoints)[T]['initiate']>[0],
  options: PrefetchOptions = {},
) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(api.util.prefetch(endpoint, arg as any, options))
  }, [])
}

// In a component
usePrefetchImmediately('getUser', 5) 

_________________________________________

store.dispatch(
  api.util.prefetch(endpointName, arg, { force: false, ifOlderThan: 10 }),
)


------------

dispatch(api.endpoints[endpointName].initiate(arg, { forceRefetch: true }))
 ***/

export function SearchByName() {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm({
		defaultValues: {
			searchName: "",
		},
	});
	return (
		<form
			onSubmit={handleSubmit((e) => {
				console.log(e);
				navigate(`/name/${e.searchName}`);
			})}
		>
			<AutoComplete
				{...register("searchName")}
				placeholder="Search pokemon by name"
				options={[{ value: "cha", label: "rmander" }]}
				filterOption
				//variant="outlined"
				//size="large"
				style={{ width: 300 }}
				//loading={false}
			/>
		</form>
	);
}
