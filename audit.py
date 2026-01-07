import json
import os
import re

def audit_templates():
    # 1. Read JSON IDs
    try:
        with open('src/data/templates.json', 'r') as f:
            data = json.load(f)
            json_ids = set(item['id'] for item in data)
            print(f"Total IDs in JSON: {len(json_ids)}")
    except Exception as e:
        print(f"Error reading templates.json: {e}")
        return

    # 2. Read Exported Keys from TSX files in templates dir
    tsx_keys = set()
    templates_dir = 'src/components/templates'
    
    # Simple regex to find keys in objects. 
    # Matches 'key-name': or "key-name": 
    # This is heuristic but usually works for the structure seen (export const X = { ... })
    key_pattern = re.compile(r"['\"]([a-z0-9-]+)['\"]\s*:")

    for filename in os.listdir(templates_dir):
        if filename.endswith('.tsx'):
            path = os.path.join(templates_dir, filename)
            try:
                with open(path, 'r') as f:
                    content = f.read()
                    # Find matches
                    matches = key_pattern.findall(content)
                    tsx_keys.update(matches)
            except Exception as e:
                print(f"Error reading {filename}: {e}")

    print(f"Total Unique Keys found in TSX: {len(tsx_keys)}")

    # 3. Compare
    missing_in_code = json_ids - tsx_keys
    missing_in_json = tsx_keys - json_ids

    if missing_in_code:
        print("\n[MISSING IN CODE] - IDs in JSON but not in Theme files:")
        for mid in sorted(missing_in_code):
            print(f" - {mid}")
    
    if missing_in_json:
        print("\n[MISSING IN JSON] - Keys in Theme files but not in JSON:")
        for mid in sorted(missing_in_json):
            print(f" - {mid}")

    if not missing_in_code and not missing_in_json:
        print("\n[SUCCESS] Everything matches perfectly!")

if __name__ == "__main__":
    audit_templates()
