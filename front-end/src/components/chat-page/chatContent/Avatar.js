function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img
          src="https://img.freepik.com/free-vector/cute-cat-yoga-pose-cartoon-illustration_138676-2791.jpg?w=740&t=st=1659775605~exp=1659776205~hmac=6f3bb6a1a1509077f8e40c45851645e41de731de89084b0f753e24c45be50e98"
          alt="user chat avatar"
        />
      </div>
      <span className="isOnline"></span>
    </div>
  );
}

export default Avatar;

// NOTE: I have 2 different classes for the online thing, isOnline and isOnline-active ...dont know how to know if user is online or not, just for the sake of design for now
