import css from "./CafeInfo.module.css"

interface CafeInfoProps {
	title: string;
	description: string;
}

export default function CafeInfo({ title, description }: CafeInfoProps) {
	return (
		<div className={css.container}>
			<h1 className={css.title}>{title}</h1>
			<p className={css.description}>
				{description}
			</p>
		</div>
	);
}