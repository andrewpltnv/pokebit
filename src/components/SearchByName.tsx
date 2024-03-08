import { AutoComplete, Input } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
{
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
}
export function SearchByName() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchName: "",
    },
    mode: "all",
  });

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        navigate(`/name/${e.searchName}`);
      })}
    >
      <AutoComplete
        placeholder="Search pokemon by name"
        options={[{ value: "pikachu", label: "Pikachu" }]}
        onSearch={(value) => console.log(value)}
        // filterOption
        //loading={false}
      >
        <Input {...register("searchName")} className="w-64" />
      </AutoComplete>
    </form>
  );
}
