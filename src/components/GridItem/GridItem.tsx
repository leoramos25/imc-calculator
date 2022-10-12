import { Level } from '../../helpers/imc';
import styles from './GridItem.module.css';

type GridItemProps = {
    item: Level
}

export function GridItem({ item }: GridItemProps) {
    return (
        <div>Grid Item</div>
    )
}