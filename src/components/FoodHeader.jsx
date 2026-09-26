import { useSelector } from "react-redux"

export default function FoodHeader(){
   
   const Counter = useSelector(state=>state.Slice_1.count)
   
    return(
       <div className="flex fixed top-0 left-0 w-full z-50 justify-between h-20 items-center shadow-xl bg-white px-40">
                <div className="flex gap-4 justify-between items-center">
                    <div className=" ">
                         <img className="h-12 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgANqB6675mmRJ8tmv2qM93I77zW2zWnrybPG3wvKr1hDFsnOP_c6oaAA&s=10"></img>
                    </div>
                    <div className="flex gap-2 items-center font-sans" >
                        <div className="font-bold text-sm transform transition hover:text-orange-600"><u>Other</u></div>
                        <div>Patna, India</div>
                    </div>
                </div>
                <div className="flex gap-14 text-lg font-semibold text-gray-900 font-sans ">
                      <button className="transform transition hover:cursor-pointer flex items-center gap-2 hover:text-orange-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="7" width="20" height="14" rx="2" />
                            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                          </svg>
                        Swiggy Corporate
                      </button>

                      <button className="transform transition hover:cursor-pointer flex items-center gap-2 hover:text-orange-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        Search
                      </button>

                      <button className="transform transition hover:cursor-pointer flex items-center gap-2 hover:text-orange-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  {/* Badge */}
                                  <path
                                    d="M12 2.8 14.2 4 16.7 3.8 17.8 6 20.2 7 20 9.5 21.2 12 20 14.5 20.2 17 17.8 18 16.7 20.2 14.2 20 12 21.2 9.8 20 7.3 20.2 6.2 18 3.8 17 4 14.5 2.8 12 4 9.5 3.8 7 6.2 6 7.3 3.8 9.8 4 Z"
                                    stroke="#3d4152"
                                    strokeWidth="1.8"
                                    strokeLinejoin="round"
                                  />

                                  {/* Top dot */}
                                  <circle
                                    cx="9"
                                    cy="9"
                                    r="1.2"
                                    fill="#3d4152"
                                  />

                                  {/* Bottom dot */}
                                  <circle
                                    cx="15"
                                    cy="15"
                                    r="1.2"
                                    fill="#3d4152"
                                  />

                                  {/* Slash */}
                                  <path
                                    d="M9.8 15.2L14.2 8.8"
                                    stroke="#3d4152"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                  />
                                </svg>
                        <p>Offers</p>
                      </button>

                      <button className="transform transition flex items-center gap-2 hover:cursor-pointer hover:text-orange-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              {/* Outer Circle */}
                              <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="#3d4152"
                                strokeWidth="2"
                              />

                              {/* Horizontal Line */}
                              <path
                                d="M3 12H21"
                                stroke="#3d4152"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />

                              {/* Inner Circle */}
                              <circle
                                cx="12"
                                cy="12"
                                r="3"
                                stroke="#3d4152"
                                strokeWidth="2"
                              />
                            </svg>
                        <p>Help</p>
                      </button>

                      <button className="transform transition hover:cursor-pointer flex items-center gap-2 hover:text-orange-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              {/* Head */}
                              <circle
                                cx="12"
                                cy="7"
                                r="3"
                                stroke="#3d4152"
                                strokeWidth="2"
                              />

                              {/* Body/Base */}
                              <path
                                d="M6 20L8 12H16L18 20H6Z"
                                stroke="#3d4152"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                            </svg>
                        <p>Sign In</p>
                      </button>

                      <button className="transform transition hover:cursor-pointer flex items-center gap-2 hover:text-orange-600">
                            <svg
                                width="24"
                                height="20"
                                viewBox="0 0 24 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 3 L19 3 L22 17 L2 17 Z"
                                  stroke="#3d4152"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                />
                              </svg>
                        <p>{`(${Counter})`}Cart</p>
                      </button>
                </div>
       </div>
    )
}