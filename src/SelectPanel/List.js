import { Box, ActionList } from '@primer/react'

function List({ items, onSelect, type }) {
    return (
        <Box sx={{ flex: 1 }}>
            <ActionList selectionVariant={type}>
                {items.map((item) => (
                    <ActionList.Item
                        key={item.text}
                        selected={false}
                        onSelect={onSelect}
                    >
                        {item.text}
                        {item.description && (
                            <ActionList.Description
                                variant={
                                    item.descriptionVariant
                                        ? item.descriptionVariant
                                        : 'block'
                                }
                            >
                                {item.description}
                            </ActionList.Description>
                        )}
                    </ActionList.Item>
                ))}
            </ActionList>
        </Box>
    )
}

export default List
