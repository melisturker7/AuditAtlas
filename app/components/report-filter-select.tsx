type ReportFilterSelectProps = {
  label: string;
  value: string;
  options: readonly string[];
  allLabel: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export function ReportFilterSelect({
  label,
  value,
  options,
  allLabel,
  onChange,
  disabled = false,
}: ReportFilterSelectProps) {
  return (
    <label className="grid gap-2 text-xs font-semibold text-[#52695C]">
      {label}
      <select
        className="min-h-11 rounded-xl border border-[#DDE5DC] bg-white px-3 text-sm font-normal text-[#29483B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C7767] disabled:cursor-not-allowed disabled:bg-[#F2F4F1] disabled:text-[#829187]"
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option value="all">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
