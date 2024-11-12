import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({
	children,
	className,
	...props
}: ContainerProps) => {
	return (
		<div className={cn('mx-auto max-w-[120rem]', className)} {...props}>
			{children}
		</div>
	);
};
