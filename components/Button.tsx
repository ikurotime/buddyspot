import Spinner from "./Spinner.tsx";

type Props = {
  loading?: boolean;
  label?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  label = "Button",
  loading,
  className = "bg-green-700",
  onClick,
}: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      onClick={onClick}
      className={"p-2 rounded-md w-24 justify-center items-center flex " +
        className}
    >
      {loading
        ? (
          <span className="flex flex-row">
            <Spinner className="w-5 h-5" />
          </span>
        )
        : (
          label
        )}
    </button>
  );
}
