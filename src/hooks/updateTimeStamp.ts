import { useDocumentOperation } from 'sanity'

interface Props {
    id: string;
    type: string;
    onComplete: () => void;
}

export function UpdateTimestampAction(props: Props) {
    const { patch } = useDocumentOperation(props.id, props.type)

    return {
        ...props,
        onHandle: () => {
            patch.execute([{ set: { updatedAt: new Date().toISOString() } }])
            props.onComplete()
        }
    }
}