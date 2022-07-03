import React from 'react'

const Chat = () => {
  return (
    <>
      <div className="flex justify-center  px-3">
        <h1 className="text-3xl font-extrabold tracking-tight animate-pulse text-white sm:text-5xl lg:text-6xl">
          Tailwindcss Chat UI
        </h1>
      </div>
      <div className="flex justify-center  px-3  mx-auto">
        <div className="max-w-xl bg-gray-100  flex justify-between flex-col  h-full   w-full py-4  shadow-sm rounded-xl my-2">
          <div
            className="messagesSection flex flex-col
          space-y-4
          p-3
          overflow-y-auto
          scrollbar-thumb-blue
          scrollbar-thumb-rounded
          scrollbar-track-blue-lighter
          scrollbar-w-2
          scrolling-touch"
          >
            <div class="flex items-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                   
                    bg-white
                    text-gray-900
                  "
                  >
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>

            <div class="chat-message">
              <div class="flex items-end pt-4 justify-end">
                <div
                  class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-md
                rounded-lg
              "
                >
                  <div>
                    <span
                      class="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    
                    bg-gray-900
                    text-white
                  "
                    >
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="flex items-end pt-4 justify-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-md
                rounded-lg
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    
                    bg-gray-900
                    text-white
                  "
                  >
                    Your error message says permission denied, npm global
                    installs must be given root privileges.
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-2"
              />
            </div>

            <div class="flex pt-4 items-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                   
                    bg-white
                    text-gray-900
                  "
                  >
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
            <div class="flex pt-4 items-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                   
                    bg-white
                    text-gray-900
                  "
                  >
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
            <div class="chat-message">
              <div class="flex items-end pt-4 justify-end">
                <div
                  class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-md
                rounded-lg
              "
                >
                  <div>
                    <span
                      class="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    
                    bg-gray-900
                    text-white
                  "
                    >
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end pt-4 justify-end">
                <div
                  class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-md
                rounded-lg
              "
                >
                  <div>
                    <span
                      class="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    
                    bg-gray-900
                    text-white
                  "
                    >
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>

            <div class="flex pt-4 items-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                   
                    bg-white
                    text-gray-900
                  "
                  >
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>

            <div class="flex pt-4 items-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                   
                    bg-white
                    text-gray-900
                  "
                  >
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
            <div class="flex pt-4 items-end">
              <div
                class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
              >
                <div>
                  <span
                    class="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                   
                    bg-white
                    text-gray-900
                  "
                  >
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div className="flex justify-center  px-3 py-2   border-t-2 border-gray-200  ">
            <div className="py-2 px-2  bg-white lg:max-w-lg  w-full   shadow-sm rounded-lg ">
              <form autoComplete="off">
                <input
                  id="search"
                  name="search"
                  className="block w-full  bg-white border border-gray-300  rounded-md py-2 pl-3 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300  sm:text-sm"
                  placeholder="Enter your message here"
                  type="text"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
