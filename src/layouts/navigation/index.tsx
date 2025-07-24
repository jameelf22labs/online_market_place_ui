import { useAuth } from "../../hooks";

const Header = () => {
  const { isInstructor, isAuthenticated } = useAuth();
  console.log(isInstructor , isAuthenticated)
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#27303a] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            EduHub
          </h2>
        </div>

        <div className="flex items-center gap-9">
          <a
            className="text-white text-sm font-medium hover:text-gray-300 transition"
            href="#"
          >
            Home
          </a>
          <a
            className="text-white text-sm font-medium hover:text-gray-300 transition"
            href="#"
          >
            My learning
          </a>
          {isInstructor && (
            <a
              className="text-white text-sm font-medium hover:text-gray-300 transition"
              href="#"
            >
              Instructor
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-4 items-center">
        {!isAuthenticated && (
          <>
            <a
              href="#"
              className="px-4 py-2 rounded-lg border border-[#4a5568] text-white text-sm font-medium hover:bg-[#2d3748] transition"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow"
            >
              Register
            </a>
          </>
        )}

        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-600"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzI-W0uAFZNcGIuayA3m6Vg5s2yaEGkIPXkyszNHQNnRKci0auSGrpBEy-CqsZoXRrt64DIwciLXLE2QpnfXa-dPctiijT4zfyKTj_TXYFCQxJccuQf-C6iRd3GhaAnUTlBeOqQhwgF6RMQ-T_1zABOxXepZcX_ZM_kUJC_c4lDOqLmtTVwk6xyEKQSJtSHexIyitoQbe5-MXtcbiPoBG6A5XYleGq8RDEjTCr_R0_HPX3xBPnXIoYx3ePL23MJmqfS19P9aXrNNMX")',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
