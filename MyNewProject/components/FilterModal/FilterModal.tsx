import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./FilterModal.styles";
import { FilterOptions } from "../../types/FilterOptions";

interface Props {
  visible: boolean;
  onClose: () => void;
  selected: FilterOptions;
  onSelect: (filter: FilterOptions) => void;
}

const FilterModal: React.FC<Props> = ({
  visible,
  onClose,
  selected,
  onSelect,
}) => {
  const [tempSelection, setTempSelection] = useState<FilterOptions>(selected);

  useEffect(() => {
    setTempSelection(selected);
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Sort records by:</Text>

          {[
            FilterOptions.Latest,
            FilterOptions.Oldest,
            FilterOptions.Popular,
          ].map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => setTempSelection(option)}
              style={styles.option}
            >
              <View style={styles.radioCircle}>
                {tempSelection === option && (
                  <View style={styles.selectedCircle} />
                )}
              </View>
              <Text style={styles.optionText}>
                {option === FilterOptions.Latest
                  ? "Upload date: latest"
                  : option === FilterOptions.Oldest
                  ? "Upload date: oldest"
                  : "Most popular"}
              </Text>
            </TouchableOpacity>
          ))}

          <Pressable
            onPress={() => {
              onSelect(tempSelection);
              onClose();
            }}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
