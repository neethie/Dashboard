export default function AddTask() {
    return (
        <form>
            <div className="bg-gray-50 rounded-md flex justify-between border border-opacity-20 border-gray-500 my-1 items-center">
                <input
                    type="text"
                    placeholder="Haz click aqui para añadir una tarea"
                    className="text-gray-500 font-normal py-5 px-10"
                />
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#111827"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
                    </svg>
                </button>
            </div>
        </form>
    );
}
