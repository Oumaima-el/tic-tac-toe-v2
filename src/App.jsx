import "./App.css";

export default function Game() {
    return (
        <div className="bg-gray-200 mx-auto w-1/2 p-10">
            <h1 className="text-4xl font-bold">Tic-Tac-Toe</h1>

            <div className="flex mt-10 justify-center">
                <div className="">
                    <div className="board-status text-start ml-5">
                        Next player: X
                    </div>
                    <div className="board m-5 mt-2">
                        <div>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                        </div>
                        <div>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                        </div>
                        <div>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                            <button className="border border-1 border-gray-400 bg-white h-12 w-12 text-2xl font-medium">
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <div className="board-history mt-8 text-start">
                    <ol className="space-y-1">
                        <li>
                            <button className="border border-1 border-gray-400 bg-gray-300 rounded px-1">
                                undo
                            </button>
                        </li>
                        <li>
                            <button className="border border-1 border-gray-400 bg-gray-300 rounded px-1">
                                redo
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
