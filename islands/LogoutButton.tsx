export default function LogoutButton() {
  return (
    <button className="p-2" onClick={() => {      
      fetch('/home', {
        method: 'POST',
      }).then((res) => {
        window.location.href = '/';
      }
      );
    }}>
        <img src="/logout.png" />
      </button>
  )
}