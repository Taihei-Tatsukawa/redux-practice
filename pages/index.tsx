import { decrement, increment, login } from "@/actions";
import { RootState } from "@/reducers";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <main className="bg-white h-[100vw] text-black">
      <div className="flex flex-col items-center gap-2 py-4">
        <h1 className="text-4xl text-center font-bold">Hello Redux</h1>
        <div className="flex flex-col items-center gap-2 my-4">
          <h2>Count: {counter}</h2>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
        </div>
        {isLogin ? (
          <h3 className="font-bold">ログインに成功！</h3>
        ) : (
          <h3 className="font-bold">ログインしてください</h3>
        )}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(login())}
        >
          Login or Logout
        </button>
      </div>
    </main>
  );
}
